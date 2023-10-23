from flask import Blueprint, render_template, url_for, redirect, request, jsonify
from ..models import BillingModel, User, db
from flask_login import current_user, login_user, logout_user, login_required
from ..forms.billing_form import CreateBillingForm


# ____________________________________________________________________________________________________________________

dance_class_appointment_bp = Blueprint(
    "billing_routes", __name__, url_prefix="/api/billing")
# ____________________________________________________________________________________________________________________
