<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Activity[]|\Cake\Collection\CollectionInterface $activities
 */
?>

<div class="activities index large-9 medium-8 columns content">
        <table cellpadding="0" cellspacing="0" class="tableToFormate"> 
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('name') ?></th>
                <th scope="col"><?= $this->Paginator->sort('CO2_per_Unit') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($activities as $activity): ?>
                <tr>
                    <td><?= h($activity->name) ?></td>
                    <td><?= $this->Number->format($activity->CO2_per_Unit) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $activity->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $activity->id], ['confirm' => __('Are you sure you want to delete # {0}?', $activity->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
                
        </tbody>
            </table>
            <Button class="ui blue button" ><?= $this->Html->link(__('Add a new type of Activity'), ['action' => 'add']) ?></Button>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.21/datatables.min.js"></script>

<script>
    $(document).ready( function () {
    $('.tableToFormate').DataTable();
} );
</script>