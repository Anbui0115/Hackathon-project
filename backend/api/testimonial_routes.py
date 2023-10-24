from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import  User, db, Testimonial
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.create_testomonial import CreateTestimonialForm


testimonial_bp = Blueprint(
    "testimonial_routes", __name__)

# Create a testimonial

@testimonial_bp.route(methods=["POST"])
@login_required
def create_testimonial():

    create_testimonial_form = CreateTestimonialForm()
    create_testimonial_form['csrf_token'].data = request.cookies['csrf_token']

    if  create_testimonial_form.validate_on_submit():
        data =  create_testimonial_form.data
        new_testimonial = Testimonial(
                user_id= current_user.id,
                content= data["content"],
            )

        db.session.add(new_testimonial)
        db.session.commit()

        new_testimonial_obj = new_testimonial.to_dict()
        return new_testimonial_obj, 201
    return {"Error": "Validation Error"}, 401
