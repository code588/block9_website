// Get the social media icons container
const socialIcons = document.querySelector('.social-icons');

// Create an array of social media platforms and their links
const socialMedia = [
  { name: 'Facebook', link: 'https://www.facebook.com/' },
  { name: 'Twitter', link: 'https://www.twitter.com/' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/' }
];

// Loop through the socialMedia array and create links for each platform
socialMedia.forEach(platform => {
  // Create a link element for each platform
  const link = document.createElement('a');
  
  // Set the link's href attribute to the platform's link
  link.setAttribute('href', platform.link);
  
  // Add a class to the link for styling
  link.classList.add('social-icon');
  
  // Create an icon element for each platform
  const icon = document.createElement('i');
  
  // Add a class to the icon for the platform's icon
  icon.classList.add(`fab`, `fa-${platform.name.toLowerCase()}`);
  
  // Append the icon to the link
  link.appendChild(icon);
  
  // Append the link to the social media icons container
  socialIcons.appendChild(link);
});
