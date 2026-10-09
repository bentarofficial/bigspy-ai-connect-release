// FB.4: build SUGGESTIONS.md from issues labelled "đề xuất".
// 📥 Waiting: open suggestions, first sent first. ✅ Updated from user suggestions: closed with "đã cập nhật",
// grouped by version (label vX.Y.Z or milestone), newest version first, crediting the proposer.
const LABEL='đề xuất',DONE='đã cập nhật';
const names=i=>(i.labels||[]).map(l=>typeof l==='string'?l:l.name);
const ver=i=>names(i).find(n=>/^v\d+\.\d+\.\d+$/.test(n))||(/^v?\d+\.\d+\.\d+$/.test(i.milestone?.title||'')?'v'+i.milestone.title.replace(/^v/,''):null);
const cmp=(a,b)=>{const p=s=>s.slice(1).split('.').map(Number);const x=p(a),y=p(b);for(let k=0;k<3;k++)if(x[k]!==y[k])return y[k]-x[k];return 0;};
const clean=s=>String(s||'').replace(/^\[Đề xuất\]\s*/i,'').replace(/[\r\n|]/g,' ').trim().slice(0,140);
const day=s=>String(s||'').slice(0,10);
function build(issues){
 const list=issues.filter(i=>!i.pull_request&&names(i).includes(LABEL));
 const waiting=list.filter(i=>i.state==='open').sort((a,b)=>a.created_at.localeCompare(b.created_at)||a.number-b.number);
 const done=list.filter(i=>i.state==='closed'&&names(i).includes(DONE));
 const groups={};for(const i of done)(groups[ver(i)||'—']??=[]).push(i);
 const order=Object.keys(groups).sort((a,b)=>a==='—'?1:b==='—'?-1:cmp(a,b));
 const line=(i,x)=>'- ['+x+'] [#'+i.number+']('+i.html_url+') · '+clean(i.title)+' · '+(x==='x'?'đề xuất bởi / by @'+i.user.login:'gửi / sent '+day(i.created_at))+((i.reactions?.['+1']||0)>0?' · 👍 '+i.reactions['+1']:'');
 let md='# Đề xuất của người dùng / User suggestions\n\nTự động cập nhật từ Issues có nhãn `'+LABEL+'`. Gửi đề xuất từ app: Settings → Đề xuất.\nGenerated automatically from issues labelled `'+LABEL+'`. Send one from the app: Settings → Suggestions.\n\n';
 md+='## 📥 Đề xuất đang chờ / Waiting ('+waiting.length+')\n\nGửi trước đứng trước. / First sent, first listed.\n\n'+(waiting.length?waiting.map(i=>line(i,' ')).join('\n'):'_Chưa có. / None yet._')+'\n\n';
 md+='## ✅ Đã cập nhật từ đề xuất người dùng / Updated from user suggestions ('+done.length+')\n\n'+(order.length?order.map(v=>'### '+(v==='—'?'Chưa ghi phiên bản / Version not set':v)+'\n\n'+groups[v].sort((a,b)=>a.created_at.localeCompare(b.created_at)).map(i=>line(i,'x')).join('\n')).join('\n\n'):'_Chưa có. / None yet._')+'\n';
 return md;
}
async function main(){
 const repo=process.env.GITHUB_REPOSITORY,token=process.env.GITHUB_TOKEN,all=[];
 for(let page=1;page<=20;page++){
  const r=await fetch('https://api.github.com/repos/'+repo+'/issues?state=all&per_page=100&labels='+encodeURIComponent(LABEL)+'&page='+page,{headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json'}});
  if(!r.ok)throw Error('GitHub API '+r.status);const d=await r.json();all.push(...d);if(d.length<100)break;
 }
 require('node:fs').writeFileSync('SUGGESTIONS.md',build(all));
}
if(require.main===module)main().catch(e=>{console.error(e.message);process.exit(1);});
module.exports={build,LABEL,DONE};
