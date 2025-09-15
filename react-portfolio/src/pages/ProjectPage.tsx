import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectHtml = async () => {
      if (!projectName) {
        setError('Project name not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/${projectName}.html`);
        if (response.ok) {
          const html = await response.text();
          setHtmlContent(html);
        } else {
          setError(`Project "${projectName}" not found`);
        }
      } catch (error) {
        console.error('Error loading project:', error);
        setError('There was an error loading the project content');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectHtml();

    // Add body class for original styling
    document.body.className = 'is-preload';

    return () => {
      document.body.className = '';
    };
  }, [projectName]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div>Loading project...</div>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          padding: '0.5rem 1rem', 
          backgroundColor: '#4a9eff', 
          color: 'white', 
          borderRadius: '4px' 
        }}>
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2>Project Not Found</h2>
        <p>{error}</p>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          padding: '0.5rem 1rem', 
          backgroundColor: '#4a9eff', 
          color: 'white', 
          borderRadius: '4px' 
        }}>
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Floating Back Button */}
      <Link 
        to="/" 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          backgroundColor: 'rgba(74, 158, 255, 0.9)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(74, 158, 255, 1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(74, 158, 255, 0.9)'}
      >
        ← Back to Portfolio
      </Link>
      
      {/* Project Content */}
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
};

export default ProjectPage;