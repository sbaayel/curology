class Api::V1::MagicsController < ApplicationController

  # GET magics
  def index
    @magics = Magic.all 
    
    render json: @magics
  end
  def show 
    render json: @magic
  end

  #POST magics
  def create 
    @magic = Magic.new(magic_params) 
    if @magic.save 
      render json: @magic 
    else 
      render error: {error: 'Unable to create magic potion.'}, status: 404
    end 
  end

  # PUT magic
  def update 
     
    if@magic.update(magic_params) 
      render json: {message: 'resource updated successfully'}, status: 204 
    else 
      render json: {message: 'resource not found'}, status: 404
    end
  end

  def destroy 
    if @magic 
      @magic.destroy 
      render json: {message: 'resource deleted successfully'}, status: 204 
    else
      render json: {message: 'resource not found'}, status: 404
    end
  end

  private

  def magic_params 
    params.require(:magic).permit(:firstName, :lastName, :email, :phone)
  end

  def find_magic 
    @magic = Magic.find(params[:id])
  end



end
