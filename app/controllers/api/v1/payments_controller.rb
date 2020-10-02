class Api::V1::PaymentsController < ApplicationController
  before_action :find_payment, only: [:create, :show, :update, :destroy]
  # GET magics
  def index
    @payments = Payment.all 
    
    render json: @payments
  end
  def show 
    render json: @payment
  end

  #POST magics
  def create 
    @payment = Payment.new(payment_params) 
    if @payment.save 
      render json: @payment 
    else 
      render error: {error: 'Unable to add payment'}, status: 404
    end
  end

  # PUT magic
  def update 
     
    if @payment 
      @payment.update(payment_params) 
      render json: {message: 'resource updated successfully'}, status: 204 
    else 
      render json: {message: 'resource not found'}, status: 404
    end
  end

  def destroy 
    if @payment 
      @payment.destroy 
      render json: {message: 'resource deleted successfully'}, status: 204 
    else
      render json: {message: 'resource not found'}, status: 404
    end
  end

  private
  
  def find_payment
    @payment = Payment.find(params[:id])
  end

  def payment_params 
    params.require(:payment).permit(:ccNum, :exp, :magic_id)
  end

  


end
