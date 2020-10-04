class Api::V1::PaymentsController < ApplicationController
  before_action :set_payment, only: [:show, :update, :destroy]
  
  def index
    @payments = Payment.all 
    
    render json: @payments
  end
  def show 
    render json: @payment
  end


  def create 
    @payment = Payment.new(payment_params) 
    if @payment.save 
      render json: @payment 
    else 
      render error: {error: 'Unable to add payment'}, status: 404
    end
  end

 
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
  
  def set_payment
    @payment = Payment.find(params[:id])
  end

  
  def payment_params
    params.require(:payment).permit(:magic_id, :ccNum, :exp)
  end

  


end
