from .db import db


class Testimonial(db.Model):
    __tablename__ = 'testimonials'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    first_name=db.Column(db.String(100))
    last_name=db.Column(db.String(100))
    content = db.Column(db.String(1000))
    role=db.Column(db.String(1000))
    isApproved=db.Column(db.Boolean, default=True)


    #relationship
    user = db.relationship('User',back_populates='testimonials')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content':self.content,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'role':self.role,
            'isApproved': self.isApproved
           }
