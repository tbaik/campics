class AddSchoolIdToPics < ActiveRecord::Migration
  def change
    add_column :pics, :school_id, :integer
    add_index :pics, :school_id
  end
end
