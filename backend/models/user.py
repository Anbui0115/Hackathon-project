from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from .db import db

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    authorization = db.Column(db.String(255), nullable = False)
    first_name = db.Column(db.String(40), nullable = False)
    last_name = db.Column(db.String(40), nullable = False)
    address = db.Column(db.String(255), nullable = False)
    phone_number = db.Column(db.Integer, nullable = False)
    free_user = db.Column(db.boolean, nullable = False)
    payment_info = db.Column(db.String(255), nullable=True)
    #relationship
    general_appointments = db.relationship("General Appoinment", back_populates='user')
    dance_class_appointments = db.relationship("Dance Class Appoinment", back_populates='user')
    media = db.relationship("Media", back_populates='user')
    review = db.relationship("Review", back_populates='user')
    billing = db.relationship("Billing+", back_populates='user')
    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }