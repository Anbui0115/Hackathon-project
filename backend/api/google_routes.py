from flask import Flask, session, redirect, url_for, Blueprint
from ..oauth_config import oauth

google_routes = Blueprint('google', __name__)

# Login
@google_routes.route('/login')
def googleLogin():
    return oauth.dance_class_app.authorize_redirect("http://127.0.0.1:5000/api/google/callback")

# Callback
@google_routes.route('/callback')
def googleCallback():
    token = oauth.dance_class_app.authorize_access_token()
    session['user'] = token

    return redirect('/api/google/display_data')

# Display Data
@google_routes.route('/display_data')
def display_data():
    return session.get('user')

# Logout
@google_routes.route('/logout')
def logout():
    session.pop('user', None)
    return redirect('/api/google/login')
