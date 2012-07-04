require 'rubygems'
require 'sinatra'
require 'rdiscount'
require 'haml'
require 'xml-sitemap'

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


# Sitemap
get '/sitemap.xml' do
    map = XmlSitemap::Map.new('kuzn.me') do |m|
        m.add(:url => '/', :period => :weekly)
        m.add(:url => '/about', :period => :weekly)
    end 
    headers['Content-Type'] = 'text/xml'
    map.render
end


