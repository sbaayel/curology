class Api::V1::AddresssController < ApplicationController 
  before_action :set_address, only: [:show, :update, :destroy]

  # GET magics
  def index
    @addresss = Address.all 
    
    render json: @addresss
  end
  def show 
    render json: @address
  end

  #POST magics
  def create 
    @address = Address.new(address_params) 
    if @address.save 
      render json: @address 
    else 
      render error: {error: 'Unable to create address'}, status: 404
    end
  end

  # PUT magic
  def update 
     
    if @address 
      @address.update(address_params) 
      render json: {message: 'resource updated successfully'}, status: 204 
    else 
      render json: {message: 'resource not found'}, status: 404
    end
  end

  def destroy 
    if @address 
      @address.destroy 
      render json: {message: 'resource deleted successfully'}, status: 204 
    else
      render json: {message: 'resource not found'}, status: 404
    end
  end

  private
  def set_address
    @address = Address.find(params[:id])
  end

  
  def address_params
    params.require(:address).permit(:magic_id, :street1, :street2, :city, :state, :zip)
  end


  



end
