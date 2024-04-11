#include<bits/stdc++.h>
using namespace std;
int main(){
    int t,ans1=0,ans2=0,result=0;
    cin>>t;
    while(t--){
        int n,a,b;
        cin>>n>>a>>b;
        if(n%2 == 0){
            ans1 = (n/2)*b;
            ans2 = n*a;
            int result = min(ans1,ans2);
            cout<<result<<endl;
        }
        else{
            ans1 = n*a;
            ans2 = ((n%2)*a) +b;
            int result = min(ans1,ans2);
            cout<<result<<endl;
        }
    }
}