export default function handler(req, res) {
  if (req.method === 'POST') {
      const clientIp = req.body.ip; // Access the IP address from the request body
      
      if (clientIp) {
          console.log(`Client IP received: ${clientIp}`);
          return res.status(200).send('IP received successfully');
      } else {
          return res.status(400).send('No IP received');
      }
  } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
