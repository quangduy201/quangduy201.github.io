import React, {useEffect, useState} from "react";
import "./Projects.css"
import {Button, Card, Col, Placeholder, Row} from "react-bootstrap";

const repos = [
  "quangduy201/cafe-management",
  "quangduy201/cafe-application",
  "quangduy201/mini-supermarket",
];

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reposInfo = await Promise.all(
        repos.map(async (repo) => {
          try {
            const response = await fetch(`https://api.github.com/repos/${repo}`);
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return await response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
            return null;
          }
        })
      );
      if (reposInfo.indexOf(null) === -1) {
        setIsLoaded(true);
      }

      setReposData(reposInfo.filter((repo) => repo !== null));
    };

    fetchData();
  }, []);

  return (
    <section className="projects">
      <h1 className="heading heading-projects">Projects</h1>
      <div className="projects-container">
        <Row xs={2} md={3} className="projects-row">
          {
            isLoaded
              ?
              reposData.map((repo, index) => (
                <Col key={index}>
                  <Card>
                    {/*<Card.Img variant="top" src={"holder.js/100px160"} />*/}
                    <Card.Body>
                      <Card.Title>
                        <a href={repo.html_url} target={"_blank"} rel="noreferrer">{repo.name}</a>
                      </Card.Title>
                      <Card.Text>{repo.description}</Card.Text>
                      <div>
                        {repo.stargazers_count > 0 && (
                          <>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star v-align-text-bottom d-inline-block mr-2">
                              <path
                                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                            </svg>
                            {repo.stargazers_count}
                          </>
                        )}
                        &nbsp;
                        {repo.forks_count > 0 && (
                          <>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked mr-2">
                              <path
                                d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                            </svg>
                            {repo.forks_count}
                          </>
                        )}
                      </div>
                      <a href={repo.html_url} target={"_blank"} rel="noreferrer">
                        <Button variant={"outline-dark"}>Source</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              :
              repos.map((repo, index) => (
                <Col key={index}>
                  <Card>
                    {/*<Card.Img variant="top" src={"holder.js/100px160"} />*/}
                    <Card.Body>
                      <Card.Title>
                        <a href={`https://github.com/${repo}`} target={"_blank"} rel="noreferrer">{repo.split("/")[1]}</a>
                      </Card.Title>
                      <Placeholder as={Card.Text} animation={"glow"}>
                        <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/> <Placeholder xs={6}/>{' '} <Placeholder xs={8}/>
                      </Placeholder>
                      <Placeholder.Button variant={"outline-dark"} xs={6}/>
                    </Card.Body>
                  </Card>
                </Col>
              ))
          }
        </Row>
      </div>
    </section>
  );
};

export default Projects;
