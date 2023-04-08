class MatriculaSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :course_id, :student_name, :course_name

  def student_name
    object.student.name
  end

  def course_name
    object.course.name
  end
end
