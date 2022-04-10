Handler = Proc.new do |req, res|
  res.status = 200
  res['Content-Type'] = 'text/text; charset=utf-8'

  domain = 'abranhe.com'
  path = req.path_info

  if path == '/'
    res.status = 301
    res['Location'] = "https://#{domain}"
  else
    res.status = 301
    res['Location'] = "https://projects.#{domain}#{path}"
  end
 end