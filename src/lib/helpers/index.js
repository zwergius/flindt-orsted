export function formattedSrc(originalUrl, w, q) {
  const host = 'img2.storyblok.com';
  const filters = '/filters:format(jpeg):quality(70)';
  const [protocol, resource] = originalUrl.split('a.storyblok.com');
  return `${protocol}${host}/${w}x${(w * q).toFixed(0)}${filters}${resource}`;
}

export function responsiveSrcSet(originalUrl, q) {
  return [400, 800, 1200, 2600]
    .map((w) => {
      return `${formattedSrc(originalUrl, w, q)} ${w}w`;
    })
    .join(', ');
}
