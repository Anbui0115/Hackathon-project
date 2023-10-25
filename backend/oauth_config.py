from authlib.integrations.flask_client import OAuth
import os

oauth = OAuth()

def configure_oauth(app):
    oauth.init_app(app)
    oauth.register(
        "dance_class_app",
        client_id=os.environ.get('GOOGLE_CLIENT_ID'),
        client_secret=os.environ.get('GOOGLE_CLIENT_SECRET'),
        server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
        client_kwargs={
            'scope': 'openid email profile https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read'
        }
    )
