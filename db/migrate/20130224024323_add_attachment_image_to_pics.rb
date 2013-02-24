class AddAttachmentImageToPics < ActiveRecord::Migration
  def self.up
    change_table :pics do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :pics, :image
  end
end
