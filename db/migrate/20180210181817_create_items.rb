class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :position
      t.datetime :date
      t.references :user, foreign_key: true
      t.references :listable, polymorphic: true

      t.timestamps
    end
  end
end
