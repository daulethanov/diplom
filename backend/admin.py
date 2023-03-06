from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from slugify import slugify

from .models import User, db, University, Image

admin = Admin()


class UniversityAdmin(ModelView):
    def on_model_change(self, form, model, is_created):
        model.slug = slugify(model.name)
        return super(UniversityAdmin, self).on_model_change(form, model, is_created)


admin.add_view(ModelView(User, db.session))
admin.add_view(UniversityAdmin(University, db.session))
admin.add_view(ModelView(Image, db.session))
