from .seeds import seed_commands


from flask import Flask, request, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from .models import db, User
from .config import Config
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.billing_routes import billing_bp
from .api.about_routes import about_routes
# from .api.chatbot_routes import chatbot_routes
from .api.dance_class_appointments_routes import dance_class_appointment_bp
from .api.general_appointments_routes import general_appointment_bp
from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect, generate_csrf
import os
from authlib.integrations.flask_client import OAuth
from backend.oauth_config import configure_oauth
from .api.google_routes import google_routes

app = Flask(__name__)
app.cli.add_command(seed_commands)
app.secret_key = os.environ.get('SECRET_KEY')
# Google OAuth
app.config.from_object(Config)
oauth = OAuth(app)
configure_oauth(app)

if __name__ == '__main__':
    app.run(debug=True)

# Blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
# app.register_blueprint(chatbot_routes, url_prefix='/api/chatbot')
app.register_blueprint(dance_class_appointment_bp, url_prefix='/api/dance_class_appointments')
app.register_blueprint(general_appointment_bp, url_prefix='/api/general_appointments')
app.register_blueprint(about_routes, url_prefix='/api/about')
app.register_blueprint(billing_bp, url_prefix='/api/billing')
app.register_blueprint(google_routes, url_prefix='/api/google')



# Login Manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

# Configuration
app.config.from_object(Config)

# Database
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response

# Test Route
@app.route('/test')
def test():
    return {'message': 'Test Route'}
