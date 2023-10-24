from .db import db, environment, SCHEMA
from .appointment_models import DanceClassAppointment
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base=declarative_base()

# ________________________________________________________________________________________________________



class Dance_Video(db.Model):

    __tablename__ = 'dance_videos'

    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    video_url = db.Column(db.String(200), nullable=False)
    dance_class_appointment_id = db.Column(db.Integer, db.ForeignKey("danceclassappointments.id"), nullable=False)
    authorization = db.Column(db.String(255), nullable = False)


    #relationship
    dance_class_appointment = db.relationship("DanceClassAppointment", back_populates="dance_videos")


    def to_dict(self):
        return {
            'id': self.id,
            'video_url': self.video_url,
            'dance_class_appointment_id':self.dance_class_appointment_id,
            'authorization': self.authorization
        }

    def __repr__(self):
        return f'<DanceVideo, id={self.id}, video_url={self.video_url},dance_class_appointment_id={self.dance_class_appintment_id}, authorization={self.authorization}'

# ________________________________________________________________________________________________________
