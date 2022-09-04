class CreateFollows < ActiveRecord::Migration[6.1]
  def change 
    create_table :follows do |t|
      t.integer :user_id
      t.string :username
      t.string :followed_by
    end
  end
end