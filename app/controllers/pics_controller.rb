class PicsController < ApplicationController
  before_filter :authenticate_user!, except: [:index]

  # GET /pics
  # GET /pics.json
  def index
    @pics = Pic.order("created_at desc")

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @pics }
    end
  end

  # GET /pics/1
  # GET /pics/1.json
  def show
    @pic = Pic.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @pic }
    end
  end

  # GET /pics/new
  # GET /pics/new.json
  def new
    @user = current_user
    @userEmail = @user.email.split('@')[1]
    @sid = 0
    if @userEmail == "uci.edu"
        School.all.each do |sch|
        if sch.name == "UCI" 
          @sid = sch.id
        end
      end
  elsif @userEmail == "stanford.edu"
    School.all.each do |sch|
        if sch.name == "STANFORD" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "mit.edu"
    School.all.each do |sch|
        if sch.name == "MIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "caltech.edu"
    School.all.each do |sch|
        if sch.name == "CIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "usc.edu"
    School.all.each do |sch|
        if sch.name == "USC" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "yale.edu"
    School.all.each do |sch|
        if sch.name == "YALE" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "dartmouth.edu"
    School.all.each do |sch|
        if sch.name == "DARTMOUTH" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "ucla.edu"
    School.all.each do |sch|
        if sch.name == "UCLA" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "princeton.edu"
    School.all.each do |sch|
        if sch.name == "PRINCETON" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "harvard.edu"
    School.all.each do |sch|
        if sch.name == "HARVARD" 
        @sid = sch.id
      end
    end
  end
    @pic = School.find(@sid).pics.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @pic }
    end
  end

  # GET /pics/1/edit
  def edit
     @user = current_user
    @userEmail = @user.email.split('@')[1]
    @sid = 0
    if @userEmail == "uci.edu"
        School.all.each do |sch|
        if sch.name == "UCI" 
          @sid = sch.id
        end
      end
  elsif @userEmail == "stanford.edu"
    School.all.each do |sch|
        if sch.name == "STANFORD" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "mit.edu"
    School.all.each do |sch|
        if sch.name == "MIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "caltech.edu"
    School.all.each do |sch|
        if sch.name == "CIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "usc.edu"
    School.all.each do |sch|
        if sch.name == "USC" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "yale.edu"
    School.all.each do |sch|
        if sch.name == "YALE" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "dartmouth.edu"
    School.all.each do |sch|
        if sch.name == "DARTMOUTH" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "ucla.edu"
    School.all.each do |sch|
        if sch.name == "UCLA" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "princeton.edu"
    School.all.each do |sch|
        if sch.name == "PRINCETON" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "harvard.edu"
    School.all.each do |sch|
        if sch.name == "HARVARD" 
        @sid = sch.id
      end
    end
  end
    @pic = School.find(@sid).pics.find(params[:id])
  end

  # POST /pics
  # POST /pics.json
  def create
    @user = current_user
    @userEmail = @user.email.split('@')[1]
    @sid = 0
    if @userEmail == "uci.edu"
        School.all.each do |sch|
        if sch.name == "UCI" 
          @sid = sch.id
        end
      end
  elsif @userEmail == "stanford.edu"
    School.all.each do |sch|
        if sch.name == "STANFORD" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "mit.edu"
    School.all.each do |sch|
        if sch.name == "MIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "caltech.edu"
    School.all.each do |sch|
        if sch.name == "CIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "usc.edu"
    School.all.each do |sch|
        if sch.name == "USC" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "yale.edu"
    School.all.each do |sch|
        if sch.name == "YALE" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "dartmouth.edu"
    School.all.each do |sch|
        if sch.name == "DARTMOUTH" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "ucla.edu"
    School.all.each do |sch|
        if sch.name == "UCLA" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "princeton.edu"
    School.all.each do |sch|
        if sch.name == "PRINCETON" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "harvard.edu"
    School.all.each do |sch|
        if sch.name == "HARVARD" 
        @sid = sch.id
      end
    end
  end
    @pic = School.find(@sid).pics.new(params[:pic])

    respond_to do |format|
      if @pic.save
        format.html { redirect_to @pic, notice: 'Pic was successfully created.' }
        format.json { render json: @pic, status: :created, location: @pic }
      else
        format.html { render action: "new" }
        format.json { render json: @pic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /pics/1
  # PUT /pics/1.json
  def update
    @pic = Pic.find(params[:id])

    respond_to do |format|
      if @pic.update_attributes(params[:pic])
        format.html { redirect_to @pic, notice: 'Pic was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @pic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pics/1
  # DELETE /pics/1.json
  def destroy
        @user = current_user
    @userEmail = @user.email.split('@')[1]
    @sid = 0
    if @userEmail == "uci.edu"
        School.all.each do |sch|
        if sch.name == "UCI" 
          @sid = sch.id
        end
      end
  elsif @userEmail == "stanford.edu"
    School.all.each do |sch|
        if sch.name == "STANFORD" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "mit.edu"
    School.all.each do |sch|
        if sch.name == "MIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "caltech.edu"
    School.all.each do |sch|
        if sch.name == "CIT" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "usc.edu"
    School.all.each do |sch|
        if sch.name == "USC" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "yale.edu"
    School.all.each do |sch|
        if sch.name == "YALE" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "dartmouth.edu"
    School.all.each do |sch|
        if sch.name == "DARTMOUTH" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "ucla.edu"
    School.all.each do |sch|
        if sch.name == "UCLA" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "princeton.edu"
    School.all.each do |sch|
        if sch.name == "PRINCETON" 
        @sid = sch.id
      end
    end
  elsif @userEmail == "harvard.edu"
    School.all.each do |sch|
        if sch.name == "HARVARD" 
        @sid = sch.id
      end
    end
  end
    @pic = Pic.find(params[:id])
    @pic.destroy

    respond_to do |format|
      format.html { redirect_to pics_url }
      format.json { head :no_content }
    end
  end
end
