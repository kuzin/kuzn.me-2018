require 'rubygems'
require 'sinatra'
require 'rdiscount'
require 'haml'

# Helpers
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, {:format => :html5} # default Haml format is :xhtml
set :markdown, :layout_engine => :haml, :layout => :post



# Application routes
get '/' do
  markdown :index, :layout => :'layouts/application'
end

get '/about' do
  haml :about, :layout => :'layouts/page'
end