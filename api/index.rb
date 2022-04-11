Handler = Proc.new do |req, res|
  domain = 'abranhe.com'
  path = req.path_info
  
  res.status = 301
  res['Location'] = path == '/' ? "https://#{domain}" : "https://projects.#{domain}#{path}"
 end