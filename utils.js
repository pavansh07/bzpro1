export const helloWorld = (req, res) => {
  res.send("Hello World");
}

const fibonacci = (n, dp) => {

  if(n==0 || n==1) return n;
  if(dp[n]!=-1) return dp[n];

  dp[n] = fibonacci(n-1, dp)+fibonacci(n-2, dp);

  return dp[n];
}

export const get_fibonacci = (req, res) => {
  var {n} = req.query;

  n = parseInt(n);
  var dp = [];

  for(let i=0; i<=n; i++) {
    dp[i] = -1;
  }

  const ans = fibonacci(n, dp);
  // console.log("Ans=" + ans);
  res.send(`Fibonacci of ${n} is ${ans}.`);
}