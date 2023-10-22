from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import Dance_Class_Appointment, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.dance_class_appointment_form import CreateDanceClassAppointmentForm


# ____________________________________________________________________________________________________________________

dance_class_appointment_bp = Blueprint(
    "dance_class_appointments_routes", __name__, url_prefix="/api/dance_class_appointments")


# ____________________________________________________________________________________________________________________

# GET ALL DANCE CLASS APPOINTMENTS


@dance_class_appointment_bp.route("/", methods=["GET"])
def all_dance_class_appointments():
    dance_class_appointments = Dance_Class_Appointment.query.all()
    response = []
    if dance_class_appointments:
        for apt in dance_class_appointments:
            apt_obj = apt.to_dict()
            response.append(apt_obj)
        print("THIS IS dance_class_appointments FROM BACKEND", response)
        return {
            "dance_class_appointments": response
        }, 200
    return {"Error": "Appointment Not Found"}, 404


# ____________________________________________________________________________________________________

# CREATE A DANCE CLASS APPOINTMENT

@dance_class_appointment_bp.route("/new/", methods=["POST"])
@login_required
def create_dance_apt():

    create_dance_apt_form = CreateDanceClassAppointmentForm()
    create_dance_apt_form['csrf_token'].data = request.cookies['csrf_token']
    # print("current user is: **********************************", current_user)

    if create_dance_apt_form.validate_on_submit:
        data = create_dance_apt_form.data
        new_dance_apt = Dance_Class_Appointment(
            # name=data["name"],
            user_id=current_user.id,
            level=data["Experience"],
            date=data["Class"],
            level=data["Level"],
            notes=data["Notes"],
            accepted=False,
            attendance=False,
        )

        db.session.add(new_dance_apt)
        db.session.commit()

        new_dance_apt_obj = new_dance_apt.to_dict()
        return new_dance_apt_obj, 201


# __________________________________________________________________________________________________



# DELETE A DANCE CLASS APPOINTMENT


@dance_class_appointment_bp.route("/<int:dance_apt_id_id>/", methods=["DELETE"])
def delete_dance_apt(dance_apt_id):

    current_dance_apt = Dance_Class_Appointment.query.get(dance_apt_id)

    if current_dance_apt:
        db.session.delete(current_dance_apt)
        db.session.commit()
        return "appointment was succesfully deleted"

    return "404 review not found"


# function to convert datetime obj to integer value so we can compare

def to_integer(date_time):
    return 10000*date_time.year + 100*date_time.month + date_time.day


# _____________________________________________________________________________________