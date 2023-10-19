from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


class Dance_Class_Appointment(db.Model):

    __tablename__ = "dance_class_appointments"

    id = db.Column(db.Integer, primary_key=True)

    # Directly routes all enquiries to the owner by default
    recipient_id = db.Column(db.Integer, db.ForeignKey("users.id"), default=1, nullable=False)


    # Enquiries include contact information since anyone can send enquiries in, regardless of whether they have an account or not.

    # user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    email_address = phone_number = db.Column(db.String(100), nullable=False)

    type = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    experience = db.Column(db.TEXT, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False)
    additional_notes = db.Column(db.TEXT, nullable=False)


    recipient = db.relationship("User", back_populates="dance_class_appointments")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'email_address': self.email_address,
            'type': self.type,
            'age': self.age,
            'experience': self.experience,
            'location': self.location,
            'accepted': self.accepted,
            'additional_notes': self.additional_notes

        }

    def __repr__(self):
        return f'<Dance_Class_Appointments, id={self.id}, user_id={self.user_id}, first_name={self.first_name}, last_name={self.last_name}, phone_number={self.phone_number}, email_address={self.email_address}, type={self.type}, age={self.age}, experience={self.experience}, location={self.location}, accepted={self.accepted}, additional_notes={self.additional_notes}'
