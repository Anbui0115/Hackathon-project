from .db import db, environment, SCHEMA
from .appointment_models import Dance_Class_Appointment
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base=declarative_base()

# ________________________________________________________________________________________________________



class DanceVideo(db.Model):

    __tablename__ = 'dance_videos'

    id = db.Column(db.Interger, primary = True, autoincrement=True)
    video_url = db.Column(db.String(200), nullable=False)
    dance_class_appintment_id = db.Column(db.Interger, db.ForeignKey("dance_class_appointments.id"), nullable=False)
    authorization = db.Column(db.String(255), nullable = False)


    #relationship
    dance_class_appintment_id = db.relationship("Dance_Class_Appointment", back_populates="dance_videos")


    def to_dict(self):
        return {
            'id': self.id,
            'video_url': self.video_url,
            'dance_class_appintment_id':self.dance_class_appintment_id,
            'authorization': self.authorization
        }

    def __repr__(self):
        return f'<DanceVideo, id={self.id}, video_url={self.video_url},dance_class_appintment_id={self.dance_class_appintment_id}, authorization={self.authorization}'

# ________________________________________________________________________________________________________

