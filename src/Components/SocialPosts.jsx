import img1 from "../assets/images/IMG-20241013-WA0041.jpg";
import img2 from "../assets/images/IMG-20241013-WA0040.jpg";
import img3 from "../assets/images/IMG-20241013-WA0038.jpg";
import img4 from "../assets/images/IMG-20241013-WA0037.jpg";
import img5 from "../assets/images/IMG-20241013-WA0036.jpg";

const socialPostsData = [
  {
    id: 1,
    image: img1,  
    alt: "Lion",
  },
  {
    id: 2,
    image: img2,  
    alt: "Deer",
  },
  {
    id: 3,
    image: img3,  
    alt: "Wild Bear",
  },
  {
    id: 4,
    image: img4,  
    alt: "Deer",
  },
  {
    id: 5,
    image: img5,  
    alt: "Horses",
  },
];

const SocialPosts = () => {
  return (
    <section className="insta-post">
      <ul className="insta-post-list">
        {socialPostsData.map((post) => (
          <li key={post.id} className="insta-post-item">
            <a href="#" className="insta-post-link">
              <img
                src={post.image}
                width="320"
                height="300"
                loading="lazy"
                alt={post.alt}
                className="img-cover"
              />
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialPosts;
