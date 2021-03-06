import React from 'react'

const Posts = ({ posts }) => (
  <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
    <div className="container">
      <h2 className="font-sans font-bold text-gray-primary mx-2">
        Ultimos posts
      </h2>
    </div>
    <div className="container flex flex-col sm:justify-center md:flex-row items-center">
      {posts.map(post => (
        <div
          key={post.node.id}
          className="flex flex-col mx-2 my-6 pb-3  w-5/6 md:w-1/3 relative border"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 30px',
            minHeight: '280px',
          }}
        >
          <a
            href={`https://medium.com/@devrchancay/${post.node.id}`}
            target="_blank"
            className="no-underline text-gray-primary"
          >
            <div>
              <img
                src={`https://cdn-images-1.medium.com/max/300/${
                  post.node.virtuals.previewImage.imageId
                }`}
                alt=""
                className="w-full"
                style={{ height: '180px' }}
              />
            </div>
            <div>
              <h4 className="font-sans font-bold px-2 py-4">
                {post.node.title}
              </h4>
            </div>
            <div className="flex px-2 py-1 justify-between absolute pin-b pin-l w-full">
              <div>Lo Lees en: </div>
              <div>{Math.round(post.node.virtuals.readingTime)} Minutos 🕔</div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Posts
