from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


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
    dance_videos = db.relationship("Dance_Video", back_populates="dance_class_appointment")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'level': self.level,
            'accepted': self.accepted,
            'attendance': self.attendance,
            'created_at': self.created_at,
            'notes': self.notes

        }

    def __repr__(self):
        return f'<Dance_Class_Appointments, id={self.id}, user_id={self.user_id},level={self.level}, accepted={self.accepted}, attendance={self.attendance},created_at={self.created_at},notes={self.notes}'

# ________________________________________________________________________________________________________


class General_Appointment(db.Model):

    __tablename__ = "general_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    date = db.Column(db.DateTime, nullable=False, unique=False)
    duration = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    type = db.Column(db.String(200), nullable=False)


    created_at = db.Column(db.DateTime, nullable=False,
                           unique=False, index=False, default=datetime.now())
    accepted = db.Column(db.Boolean, nullable=False, default=False)
    notes = db.Column(db.TEXT, nullable=False)

    user = db.relationship("User", back_populates="general_appointments")
    general_media = db.relationship("General_Media", back_populates="general_appointment")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'date': self.date,
            'duration': self.duration,
            'location': self.location,
            'type': self.type,
            'accepted': self.accepted,
            'created_at': self.created_at,
            'notes': self.notes

        }

    def __repr__(self):
        return f'<General_Appointments, id={self.id}, user_id={self.user_id},date={self.date}, accepted={self.accepted}, location={self.location}, type={self.type},duration={self.duration},created_at={self.created_at},notes={self.notes}'
