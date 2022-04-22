
moved {
  from = aws_acm_certificate.default
  to   = module.aws-s3-website.aws_acm_certificate.default
}

moved {
  from = aws_acm_certificate_validation.default
  to   = module.aws-s3-website.aws_acm_certificate_validation.default
}

moved {
  from = aws_cloudfront_distribution.site
  to   = module.aws-s3-website.aws_cloudfront_distribution.site
}

moved {
  from = aws_cloudfront_origin_access_identity.origin_access_identity
  to   = module.aws-s3-website.aws_cloudfront_origin_access_identity.origin_access_identity
}

moved {
  from = aws_route53_record.subdomain
  to   = module.aws-s3-website.aws_route53_record.subdomain
}

moved {
  from = aws_route53_record.validation["*.cv.rhodh.com"]
  to   = module.aws-s3-website.aws_route53_record.validation["*.cv.rhodh.com"]
}

moved {
  from = aws_route53_record.validation["cv.rhodh.com"]
  to   = module.aws-s3-website.aws_route53_record.validation["cv.rhodh.com"]
}

moved {
  from = aws_s3_bucket.site_bucket
  to   = module.aws-s3-website.aws_s3_bucket.site_bucket
}

moved {
  from = aws_s3_bucket_acl.site_bucket_acl
  to   = module.aws-s3-website.aws_s3_bucket_acl.site_bucket_acl
}

moved {
  from = aws_s3_bucket_website_configuration.site_bucket_webiste_config
  to   = module.aws-s3-website.aws_s3_bucket_website_configuration.site_bucket_website_config
}

