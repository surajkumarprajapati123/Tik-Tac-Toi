// #include<iostream>
// using namespace std;
// int main()
// {
//   int t;
//   cin>>t;
//   while(t--)
//   {
//     int a,b;
//     cin>>a>>b;
//     if(a==b)
//     cout<<"YES"<<endl;
     
//   else if(a<b)
//      {
//      while(a==b)
//      {
//        a=a*2;
//      }
//      cout<<"YES"<<endl;
//      }
//       else if(b>a)
//      {
//      while(a==b)
//      {
//        b=b*2;
//      }
//      cout<<"YES"<<endl;
//      }
     
    
     
//      else{
//        cout<<"NO"<<endl;
//      }
    
  
    
//   }
//   return 0;
// }
#include<iostream>
using namespace std;
int main()
{
  int t;
  cout<<"enter the t:";
  cin>>t;
  while(t--)
  {
    int a,b;
    cout<<"enterthe value of a and b:"<<endl;
    cin>>a>>b;
    int a1=a,b1=b;
    if(a!=b)
    cout<<"yes"<<endl;
    else{
      while(a==b)
      {
        a=a*2;
      }
      cout<<"value of a and b:"<<a<<b<<endl;
      while(a1!=b1)
      {
        b1=b1*2;
      }
      cout<<a1<<b1<<endl;
      if(a==b||a1==b1)
      {
        cout<<"yes"<<endl;
      }
      else
      {
        cout<<"no"<<endl;
      }
      
    }
  }
  return 0;
}