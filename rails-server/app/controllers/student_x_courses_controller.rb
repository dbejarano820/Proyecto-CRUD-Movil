class StudentXCoursesController < ApplicationController
    before_action :set_student_x_course, only: [:show, :update, :destroy]
  
    # GET /student_x_courses
    def index
      @student_x_courses = StudentXCourse.all
  
      render json: @student_x_courses
    end
  
    # GET /student_courses/1
    def show
      render json: @student_x_course
    end
  
    # POST /student_x_courses
    def create
      @student_x_course = StudentXCourse.new(student_course_params)
  
      if @student_x_course.save
        render json: @student_x_course, status: :created, location: @student_x_course
      else
        render json: @student_x_course.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /student_x_courses/1
    def update
      if @student_x_course.update(student_x_course_params)
        render json: @student_x_course
      else
        render json: @student_x_course.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /student_x_courses/1
    def destroy
      @student_x_course.destroy
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_student_course
      @student_x_course = StudentXCourse.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def student_x_course_params
      params.require(:student_x_course).permit(:student_id, :course_id)
    end
  end
  