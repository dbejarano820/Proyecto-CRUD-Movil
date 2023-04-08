class MatriculasController < ApiController
    before_action :set_matricula, only: [:show, :update, :destroy]
  
    # GET /matriculas
    def index
      @matriculas = Matricula.includes(:student, :course).all
  
      render json: @matriculas
    end
  
    # GET /matriculas/1
    def show
      render json: @matricula
    end
  
    # POST /matriculas
    def create
      @matricula = Matricula.new(matricula_params)
  
      if @matricula.save
        render json: @matricula, status: :created, location: @matricula
      else
        render json: @matricula.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /matriculas/1
    def update
      if @matricula.update(matricula_params)
        render json: @matricula
      else
        render json: @matricula.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /matriculas/1
    def destroy
      @matricula.destroy
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_matricula
      @matricula = Matricula.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def matricula_params
      params.require(:matricula).permit(:student_id, :course_id)
    end
  end
  