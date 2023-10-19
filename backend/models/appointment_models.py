from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


class Dance_Class_Appointment(db.Model):

    __tablename__ = "dance_class_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    date = db.Column(db.DateTime, nullable=False, unique=False)
    level = db.Column(db.String(100), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False)
    attendance = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())
    notes = db.Column(db.TEXT, nullable=False)


    user = db.relationship("User", back_populates="dance_class_appointments")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'level': self.level,
            'accepted': self.accepted,
            'attendance': self.attendance,
            'created_at': self.created_at,
            'notes': self.additional_notes

        }

    def __repr__(self):
        return f'<Dance_Class_Appointments, id={self.id}, user_id={self.user_id},level={self.level}, accepted={self.accepted}, attendance={self.attendance},notes={self.notes}'
