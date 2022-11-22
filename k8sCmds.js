const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.AppsV1Api);

k8sApi.listNamespacedStatefulSet('harshit-richariya-katonic-ai').then((res) => {
    // console.log(res.body.items[0].metadata.name);
    // console.log(res.body.items[0].metadata.creationTimestamp);
    // console.log(res.body.items[0].spec.template.spec.containers[1].image)
    // console.log(res.body.items[0].spec.template.spec.containers[1].resources.limits.cpu)
    // console.log(res.body.items[0].spec.template.spec.containers[1].resources.limits.memory)
    // console.log(res.body.items[0].spec.template.spec.containers[1].volumeMounts[0].mountPath)
    // res.body.items.map(sts => {
    //     console.log(sts.status)
    // })
    console.log(res.body.items[1].status)
    // console.log(res.body.items[0].metadata.generateName.slice(0, -1));
    // console.log(res.body.items[0].metadata.creationTimestamp);
    // console.log(res.body.items[0].spec.containers[1].image);
    // console.log(res.body.items[0].spec.containers[1].resources.limits.cpu);
    // console.log(res.body.items[0].spec.containers[1].resources.limits.memory);
    // console.log(res.body.items[0].spec.containers[1].volumeMounts[0].mountPath);
    // console.log(res.body.items[0].status.phase);
});

// let stsObj = {};
//     stsObj["stsName"] = sts.metadata.generateName.slice(0, -1);
//     stsObj["stsCreateTime"] = sts.metadata.creationTimestamp;
//     stsObj["stsImageName"] = sts.spec.containers[1].image;
//     stsObj["stsCpu"] = sts.spec.containers[1].resources.limits.cpu;
//     stsObj["stsMemory"] = sts.spec.containers[1].resources.limits.memory;
//     stsObj["stsVolume"] = sts.spec.containers[1].volumeMounts[0].mountPath;
//     stsObj["stsPhase"] = sts.status.phase;
//     nbData.push(stsObj);