class CreateMagics < ActiveRecord::Migration[6.0]
  def change
    create_table :magics do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :phone
      t.numeric :quantity
      t.string :total
      t.string :image

      t.timestamps
    end
  end
end
