from backend.models import db, environment, SCHEMA, Review



def seed_testimonials():
            # 'id': self.id,
            # 'user_id': self.user_id,
            # 'content':self.content,
            # 'photo_url': self.photo_url,
            # 'review_type': self.review_type,
            # 'created_at':self.created_at,
    testimonial1 = Review(
        id=1,
        user_id=2,
        content= "Priyanka is a true gem in the world of Bharatanatyam. Her skills and creativity are matched only by her kindness and generosity",
        review_type="Dance Lessons",
        name="Anjali S.",
        role="Student at Priyada Arts"

    )


    db.session.add(testimonial1)
    db.session.commit()


def undo_testimonials():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
