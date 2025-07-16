
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
      title: "Building Scalable Digital Ecosystems",
      excerpt: "How we architect modern digital solutions that grow with your business needs and scale seamlessly.",
      author: "Raj Patel",
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=entropy&cs=tinysrgb",
      insights: "Strategic Planning"
    },
    {
      title: "ROI-Driven Marketing: Beyond Vanity Metrics",
      excerpt: "Why tracking the right metrics is crucial for sustainable business growth and long-term success.",
      author: "Priya Singh",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=entropy&cs=tinysrgb",
      insights: "Growth Analytics"
    },
    {
      title: "Full-Stack Development Best Practices",
      excerpt: "Modern development approaches that ensure maintainable, scalable, and secure applications.",
      author: "Arjun Kumar",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop&crop=entropy&cs=tinysrgb",
      insights: "Technical Excellence"
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
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              name: "Raj Patel",
              role: "Founder & CEO",
              expertise: "Strategic Vision & Business Development",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&cs=tinysrgb",
              experience: "8+ Years",
              specialization: "Digital Strategy"
            },
            {
              name: "Priya Singh", 
              role: "Creative Director",
              expertise: "Brand Design & User Experience",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b96f?w=300&h=300&fit=crop&crop=face&cs=tinysrgb",
              experience: "6+ Years",
              specialization: "UI/UX Design"
            },
            {
              name: "Arjun Kumar",
              role: "Technical Lead",
              expertise: "Full-Stack Development & Architecture",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&cs=tinysrgb",
              experience: "7+ Years", 
              specialization: "Web Development"
            }
          ].map((member, index) => (
            <div key={member.name} className="team-member group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                
                {/* Team Member Photo */}
                <div className="team-photo w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Team Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[rgb(162,156,62)] font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {member.expertise}
                  </p>
                  
                  {/* Experience & Specialization */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-center items-center space-x-2">
                      <span className="text-xs bg-[rgb(162,156,62)]/10 text-[rgb(162,156,62)] px-2 py-1 rounded-full">
                        {member.experience}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {member.specialization}
                      </span>
                    </div>
                  </div>
                  
                  {/* Contact Button */}
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent(`Hello ${member.name}! I'd like to discuss a project with MDM Consulting.`);
                      window.open(`https://wa.me/919818303762?text=${message}`, '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)] text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Connect
                  </button>
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
              <div key={post.title} className="blog-post bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Blog Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[rgb(162,156,62)]/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-block px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-md">
                      {post.insights}
                    </span>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(162,156,62)] transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  {/* Author & Read Time */}
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-[rgb(162,156,62)] to-[rgb(132,124,52)] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{post.author.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  {/* Read More Button */}
                  <button className="w-full mt-4 py-2 px-4 border border-[rgb(162,156,62)] text-[rgb(162,156,62)] rounded-lg font-medium hover:bg-[rgb(162,156,62)] hover:text-white transition-all duration-300">
                    Read Full Article
                  </button>
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
