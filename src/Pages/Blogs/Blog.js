import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto' >
           <div>
               <h2>Difference between SQL and NoSQL?</h2>
               <h2>SQL</h2>
               <li>SQL databases are primarily called RDBMS or Relational Databases</li>
               <li>SQL databases are table based databases</li>
               <li>	SQL databases have a predefined schema</li>
               <li>
                SQL databases are table-based databases which makes them better for multi-row transaction application</li>
                <li>Example:Oracle, Postgres, and MS-SQL.</li>
                <h2>NoSQl</h2>
                <li>NoSQL databases are known as non-relational or distributed database.</li>
                <li>NoSQL databases can be document based, key-value pairs, graph databases</li>
                <li>NoSQL databases use dynamic schema for unstructured data</li>
                <li>Example: MongoDB, Redis, Neo4j, Cassandra, Hbase.</li>
           </div>
           <div className='my-5'>
             <h2>What is JWT, and how does it work?</h2>
             <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
             <h2>How does work?</h2>
             <p>JWT deffer from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted
             a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT
             </p>
           </div>
           <div className="my-5">
            <h2>What is the difference between javascript and NodeJS?</h2>
            <h1>Javascript</h1>
            <li>It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications</li>
            <li>	It is a programming language. It works in any browser that has a proper browser engine.</li>
            <li>It is generally used on the client-side server.</li>
            <li>JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</li>
            <li>	Javascript is capable enough to add HTML and play with the DOM</li>
              <h2 className='my-3' >NodeJs</h2>
              <li>It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.</li>
              <li>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</li>
              <li>It is generally used on the server-side.</li>
              <li>All node projects represent the JavaScript community</li>
              <li>Nodejs does not have capability to add HTML tags.</li>
           </div>
           <div className="my-5">
            <h2>How does NodeJS handle multiple requests at the same time?</h2>
            <p>
            Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
            No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.</p>
            <h2>How Handle Multiple requests</h2>
            
            <p>
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module
            </p>
           </div>
        </div>
    );
};

export default Blog;