
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Team member cards animation
      gsap.fromTo('.team-member', 
        { y: 80, opacity: 0, rotationY: 45 },
        { 
          y: 0, 
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.team-grid',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Blog posts animation
      gsap.fromTo('.blog-post', 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.blog-section',
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for team photos
      gsap.to('.team-photo', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, teamRef);

    return () => ctx.revert();
  }, []);

  const blogPosts = [
    {
      title: "The Future of Design Systems",
      excerpt: "How modern design systems are revolutionizing the way we build digital products.",
      author: "Sarah Smith",
      readTime: "5 min read",
      category: "Design"
    },
    {
      title: "AI-Powered Development Tools",
      excerpt: "Exploring the latest AI tools that are transforming software development workflows.",
      author: "Alex Johnson",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      title: "Digital Marketing Trends 2024",
      excerpt: "Key strategies and trends that will shape digital marketing in the coming year.",
      author: "Maria Garcia",
      readTime: "6 min read",
      category: "Marketing"
    }
  ];

  return (
    <div id="team" ref={teamRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fade-up text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Meet The<br />
            Team
          </h2>
          <p className="fade-up text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of creative professionals brings together years of experience 
            in design, technology, and strategic thinking.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[1, 2, 3, 4].map((member, index) => (
            <div key={member} className="team-member group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-500 hover:shadow-lg">
                
                {/* Team Member Photo */}
                <div className="team-photo w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {['J', 'S', 'A', 'M'][index]}
                    </span>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {['John Doe', 'Sarah Smith', 'Alex Johnson', 'Maria Garcia'][index]}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {['Creative Director', 'Lead Designer', 'Tech Lead', 'Project Manager'][index]}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                      <span className="text-xs font-bold">in</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                      <span className="text-xs font-bold">tw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Section */}
        <div className="blog-section">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h3>
            <p className="text-lg text-gray-600">Thoughts and perspectives from our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="blog-post bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "240+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="fade-up text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
