from flask import Blueprint, request
from ..models import DanceClassAppointment, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.dance_class_appointment_form import CreateDanceClassAppointmentForm


# ____________________________________________________________________________________________________________________

dance_class_appointment_bp = Blueprint(
    "dance_class_appointments_routes", __name__, url_prefix="/api/danceclassappointments")


# ____________________________________________________________________________________________________________________

# GET ALL DANCE CLASS ENQUIRIES -- WORKS


@dance_class_appointment_bp.route("/", methods=["GET"])
@login_required
def all_dance_class_appointments():
    dance_class_appointments = DanceClassAppointment.query.all()
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
#  GET DANCE ENQUIRY BY ID -- WORKS


@dance_class_appointment_bp.route("/<int:dance_apt_id>/", methods=["GET"])
@login_required
def get_dance_apt(dance_apt_id):
    dance_apt = DanceClassAppointment.query.get(dance_apt_id)

    if dance_apt:
        dance_apt_obj = dance_apt.to_dict()
        return dance_apt_obj, 201

    return {"Error": "Appointment Not Found"}, 404


# ____________________________________________________________________________________________________

# CREATE A DANCE CLASS ENQUIRY -- WORKS

@dance_class_appointment_bp.route("/new/", methods=["POST"])
@login_required
def create_dance_apt():

    create_dance_apt_form = CreateDanceClassAppointmentForm()
    create_dance_apt_form['csrf_token'].data = request.cookies['csrf_token']

    # print("current user is: **********************************", current_user)

    if create_dance_apt_form.validate_on_submit():
        data = create_dance_apt_form.data
        new_dance_apt = DanceClassAppointment(
                user_id=current_user.id,
                first_name=current_user.first_name,
                last_name=current_user.last_name,
                email=current_user.email,
                phone_number=current_user.phone_number,

                level=data["level"],
                age=data['age'],
                location=data['location'],
                notes=data["notes"],
                isApproved=False,
                attendance=False,
            )

        db.session.add(new_dance_apt)
        db.session.commit()

        new_apt_obj = new_dance_apt.to_dict()
        return new_apt_obj, 201
    return {"Error": "Validation Error"}, 401


# __________________________________________________________________________________________________



# DELETE A DANCE CLASS ENQUIRY -- WORKS


@dance_class_appointment_bp.route("/<int:dance_apt_id>/", methods=["DELETE"])
@login_required
def delete_dance_apt(dance_apt_id):

    current_dance_apt = DanceClassAppointment.query.get(dance_apt_id)

    if current_dance_apt:
        db.session.delete(current_dance_apt)
        db.session.commit()
        return "enquiry was succesfully deleted"

    return {"Error": "Appointment Not Found"}, 404


# function to convert datetime obj to integer value so we can compare

def to_integer(date_time):
    return 10000*date_time.year + 100*date_time.month + date_time.day


# _____________________________________________________________________________________
