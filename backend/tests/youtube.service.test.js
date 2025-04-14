/**
 * Test script for YouTube service
 *
 * This script tests the functionality of the YouTube service
 * to ensure it can properly validate URLs and fetch video information.
 */

// Import the YouTube service
const youtubeService = require('../src/services/youtube.service');

// Test video URLs
const validYouTubeUrls = [
  'https://www.youtube.com/watch?v=dU7GwCOgvNY',
  'https://youtu.be/dU7GwCOgvNY',
  'https://youtube.com/watch?v=dU7GwCOgvNY',
  'https://www.youtube.com/watch?v=dU7GwCOgvNY&feature=share'
];

const invalidYouTubeUrls = [
  'https://www.google.com',
  'https://vimeo.com/123456789',
  'not a url',
  'youtube.com', // Missing protocol
];

// Test URL validation
console.log('Testing URL validation...');
console.log('------------------------');

validYouTubeUrls.forEach(url => {
  const isValid = youtubeService.isValidYouTubeUrl(url);
  console.log(`URL: ${url}`);
  console.log(`Is valid: ${isValid}`);
  console.log(`Expected: true`);
  console.log(`Test ${isValid === true ? 'PASSED' : 'FAILED'}`);
  console.log('------------------------');
});

invalidYouTubeUrls.forEach(url => {
  const isValid = youtubeService.isValidYouTubeUrl(url);
  console.log(`URL: ${url}`);
  console.log(`Is valid: ${isValid}`);
  console.log(`Expected: false`);
  console.log(`Test ${isValid === false ? 'PASSED' : 'FAILED'}`);
  console.log('------------------------');
});

// Test video info fetching
async function testVideoInfoFetching() {
  console.log('Testing video info fetching...');
  console.log('------------------------');

  // Test with a valid video that has captions
  const validVideoUrl = 'https://www.youtube.com/watch?v=dU7GwCOgvNY';


  try {
    console.log(`Fetching info for: ${validVideoUrl}`);
    const videoInfo = await youtubeService.getVideoInfo(validVideoUrl);

    console.log('Video info fetched successfully:');
    console.log(`Title: ${videoInfo.title}`);
    console.log(`Thumbnail: ${videoInfo.thumbnail ? 'Available' : 'Not available'}`);
    console.log(`Duration: ${videoInfo.duration}`);
    console.log(`Transcript: ${videoInfo.transcript ? 'Available' : 'Not available'}`);
    console.log("transcript:", videoInfo.transcript);
    console.log('------------------------');


    if (videoInfo.title && (videoInfo.transcript || videoInfo.transcript === null)) {
      console.log('Test PASSED');
    } else {
      console.log('Test FAILED - Missing required information');
    }
  } catch (error) {
    console.error('Test FAILED with error:', error.message);
  }

  console.log('------------------------');

}

// Run the async tests
testVideoInfoFetching().catch(error => {
  console.error('Test runner failed:', error);
});
