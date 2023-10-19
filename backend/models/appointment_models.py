from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


class General_Appointment(db.Model):
    __tablename__ = "general_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # first_name = db.Column(db.String(50), nullable=False)
    # last_name = db.Column(db.String(50), nullable=False)
    # phone_number = db.Column(db.String(20), nullable=False)
    # email_address = phone_number = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    experience = db.Column(db.TEXT, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False)
    additional_notes = db.Column(db.TEXT, nullable=False)

    user = db.relationship("User", back_populates="general_enquiries")
