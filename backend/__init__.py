from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from .models import db, User
from .config import Config
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.chatbot_routes import chatbot_routes
from flask_login import LoginManager

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)

# Blueprints
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(chatbot_routes, url_prefix='/api/chatbot')

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

# Test Route
@app.route('/test')
def test():
    return {'message': 'Test Route'}
