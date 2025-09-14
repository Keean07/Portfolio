import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const { projectName } = useParams<{ projectName: string }>();
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const fetchProjectHtml = async () => {
      try {
        const response = await fetch(`/${projectName}.html`);
        if (response.ok) {
          const html = await response.text();
          setHtmlContent(html);
        } else {
          setHtmlContent('<h2>Project not found</h2><p>Sorry, the requested project could not be loaded.</p>');
        }
      } catch (error) {
        console.error('Error loading project:', error);
        setHtmlContent('<h2>Error loading project</h2><p>There was an error loading the project content.</p>');
      }
    };

    if (projectName) {
      fetchProjectHtml();
    }

    // Add body class for original styling
    document.body.className = 'is-preload';

    return () => {
      document.body.className = '';
    };
  }, [projectName]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default ProjectPage;